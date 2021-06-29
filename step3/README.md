# 기본환경 설정

```bash
$ npm install
$ npm start
```

## PUT Method

PUT은 정보를 수정하기 위한 Method이다.
Body에 정보를 담아서 보내며, 암호화처리되어 있어 안전하다.

- URL은 복수형 명사를 사용한다.
- 특정 데이터를 수정하기때문에 ID를 지정한다.

ex)
- 수정 : PUT http://localhost:3000/users/1