import "@testing-library/jest-dom";

// src/setupTests.js
import { server } from "../mocks/server";

// 모든 테스트 파일을 대상으로 테스트 전에 msw 서버 실행
beforeAll(() => server.listen());

// 테스트 종료 후에 모든 handler를 초기화함으로써 다른 테스트에 영향을 가지 않는다.
afterEach(() => server.resetHandlers());

// 모든 테스트가 끝난 이후에는 msw 서버 종료
afterAll(() => server.close());
