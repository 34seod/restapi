# 기본환경 설정

```bash
$ npm install
$ npm start
```

## GET Method

GET은 정보를 조회하기 위한 Method이다.
Body를 담을 수는 있지만 보안상 좋지 않기 때문에 사용해서는 안된다.
보통 목록을 가져오거나, 개별 상세 정보를 가져오기 위해 사용한다.

- URL은 복수형 명사를 사용한다.
- 개별조회는 /로 구분하여 해당ID를 조회하도록 한다.

ex)
- 목록 조회 : GET http://localhost:3000/users
- 상세 조회 : GET http://localhost:3000/users/1