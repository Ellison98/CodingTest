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

    re