# CodingTest_JavaScript


[main.c]
#define _CRT_SECURE_NO_WARNINGS
#define _CRT_NONSTDC_NO_DEPRECATE
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <time.h>
#include <math.h>

#include "graph.h"

int main(int argc, char* argv[])
{
    if (argc != 2) {
        fprintf(stderr, "Usage: graph.exe <graph.txt>\n");
        exit(EXIT_FAILURE);
    }
    char* fname = argv[1];
    printf("fname %s\n", fname);   
    GraphType* g = (GraphType*)malloc(sizeof(GraphType));
    init(g);

    read_graph(fname, g);

    print_adj_list(g);
    dfs(g);
    free(g);
    return 0;
}

[graph.c]
#define _CRT_SECURE_NO_WARNINGS
#define _CRT_NONSTDC_NO_DEPRECATE
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <time.h>
#include <math.h>

#include "graph.h"

// 그래프 초기화 
void init(GraphType* g) {
    g->n = 0;
    g->name_count = 0;
    for (int v = 0; v < MAX_VERTICES; v++)
        g->adj_list[v] = NULL;
}

// 정점 삽입 연산
void insert_vertex(GraphType* g, char* name) {
    int index = get_vertex_index(g, name);
    if (index == g->n) {
        g->n++;
    }
}

// 간선 삽입 연산, v를 u의 인접 리스트에 삽입한다.
void insert_edge(GraphType* g, char* start, char* end) {
    int u = get_vertex_index(g, start);
    int v = get_vertex_index(g, end);

    GraphNode* node = (GraphNode*)malloc(sizeof(GraphNode));
    node->vertex = v;
    node->link = g->adj_list[u];
    g->adj_list[u] = node;
}


void print_adj_list(GraphType* g) {
    for (int i = 0; i < g->n; i++) {
        GraphNode* p = g->adj_list[i];
        printf("정점 %s의 인접 리스트 ", g->names[i]);  // 인덱스 대신 이름을 출력
        while (p != NULL) {
            printf("-> %s ", g->names[p->vertex]);  // 인덱스 대신 이름을 출력
            p = p->link;
        }
        printf("\n");
    }
}

int visited[MAX_VERTICES] = { FALSE };

// 인접 리스트로 표현된 그래프에 대한 깊이 우선 탐색
void dfs_list(GraphType* g, int v)
{
    GraphNode* w;
    visited[v] = TRUE;         // 정점 v의 방문 표시 
    printf("정점 %s -> ", g->names[v]);      // 방문한 정점 출력
    for (w = g->adj_list[v]; w; w = w->link)// 인접 정점 탐색 
        if (!visited[w->vertex])
            dfs_list(g, w->vertex); //정점 w에서 DFS 새로 시작
}

void dfs(GraphType* g) {
    for (int i = 0; i < g->n; i++)
        if (!visited[i]) {
            dfs_list(g, i);
            printf("\n");
        }
}

int get_vertex_index(GraphType* g, char* name) {
    for (int i = 0; i < g->name_count; i++) {
        if (strcmp(g->names[i], name) == 0) {
            return i;
        }
    }
    // 이름이 새로운 경우, 추가
    strcpy(g->names[g->name_count], name);
    return g->name_count++;
}

void read_graph(char* fname, GraphType* g) {
    FILE* fin = fopen(fname, "r");
    if (!fin) {
        fprintf(stderr, "Cannot open file: %s\n", fname);
        exit(EXIT_FAILURE);
    }

    char buf[BUFSIZ];
    fgets(buf, BUFSIZ, fin);
    int n_nodes;
    sscanf(buf, "%d", &n_nodes);

    char start[MAX_NAME_LEN], end[MAX_NAME_LEN];
    while (fgets(buf, BUFSIZ, fin) != NULL) {
        if (sscanf(buf, "%s %s", start, end) == 2) {
            insert_vertex(g, start);
            insert_vertex(g, end);
            insert_edge(g, start, end);
        }
    }
    fclose(fin);
}
[graph.h]
#ifndef __GRAPH__
#define __GRAPH__

#include <stdio.h>
#include <stdlib.h>

#define MAX_VERTICES 50
#define MAX_NAME_LEN 50
#define TRUE 1
#define FALSE 0

typedef struct GraphNode {
    int vertex;
    struct GraphNode* link;
} GraphNode;

typedef struct {
    char names[MAX_VERTICES][MAX_NAME_LEN]; // 노드 이름 저장
    int n;  // 정점의 개수
    GraphNode* adj_list[MAX_VERTICES];
    int name_count;  // 현재 저장된 노드 이름 수
} GraphType;

void init(GraphType* g);
void insert_vertex(GraphType* g, char* name);
int get_vertex_index(GraphType* g, char* name);
void insert_edge(GraphType* g, char* start, char* end);
void print_adj_list(GraphType* g);
void dfs(GraphType* g);
void read_graph(char* fname, GraphType* g);

#endif
