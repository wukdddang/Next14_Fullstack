# 베이스 이미지 선택
FROM node:latest

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사
COPY package.json package-lock.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 빌드
RUN npm run build

# 포트 설정
EXPOSE 3000

# 실행 명령어
CMD ["npm", "start"]