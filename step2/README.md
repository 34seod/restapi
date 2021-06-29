# 기본환경 설정

```bash
$ npm install
$ npm start
```

## POST Method

POST는 정보를 등록하기 위한 Method이다.
Body에 정보를 담아서 보내며, 암호화처리되어 있어 안전하다.

- URL은 복수형 명사를 사용한다.
- 등록이기 때문에 ID는 지정하지 않는다.

ex)
- 등록 : POST http://localhost:3000/users