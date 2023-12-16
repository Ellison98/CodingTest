SELECT ROUND(AVG(DAILY_FEE)) AS AVERAGE_FEE
FROM CAR_RENTAL_COMPANY_CAR 
WHERE CAR_TYPE = 'SUV';

-- AVG 함수를 사용하여 DAILY_FEE 평균을 구하고
-- ROUND 함수를 사용하여 소수점 첫 번째 자리에서 반올림을 한다.
-- AS 를 사용하여 컬럼명을 지정한다.
-- CAR_RENTAL_COMPANY_CAR 테이블에서 조건이 CAR_TYPE을 SUV인 것을 구한다.