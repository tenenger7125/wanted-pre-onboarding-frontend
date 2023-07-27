import userEvent from "@testing-library/user-event";

import { render, screen } from "../../tests/custom";
import Todo from "./index";
import { TEST_ID } from "../../constants";

describe("todo input 테스트", () => {
  test("새로운 todo 입력 후 제출시, 화면에 todo item 표시", async () => {
    const { unmount } = render(<Todo />);

    const user = userEvent.setup();

    const $newTodoInput = screen.getByTestId(TEST_ID.NEW_TODO_INPUT);
    const $newTodoAddButton = screen.getByTestId(TEST_ID.NEW_TODO_ADD_BUTTON);

    await user.clear($newTodoInput);
    await user.type($newTodoInput, "테스트입니다.");
    await user.click($newTodoAddButton);

    expect(screen.getByRole("listitem")).toBeInTheDocument();

    unmount();
  });
});

describe("todo item 테스트", () => {
  test("todo 추가 후 삭제", async () => {
    const { unmount } = render(<Todo />);

    const user = userEvent.setup();

    // todo 추가
    const $newTodoInput = screen.getByTestId(TEST_ID.NEW_TODO_INPUT);
    const $newTodoAddButton = screen.getByTestId(TEST_ID.NEW_TODO_ADD_BUTTON);
    await user.clear($newTodoInput);
    await user.type($newTodoInput, "테스트입니다.");
    await user.click($newTodoAddButton);
    expect(screen.getByRole("listitem")).toBeInTheDocument();

    // todo 삭제
    const $deleteButton = screen.getByTestId(TEST_ID.DELETE_BUTTON);
    await user.click($deleteButton);
    expect(screen.getByRole("listitem")).toBeInTheDocument();

    unmount();
  });

  test("todo 추가 후 수정 => 제출", async () => {
    const { unmount } = render(<Todo />);

    const user = userEvent.setup();

    // todo 추가
    const $newTodoInput = screen.getByTestId(TEST_ID.NEW_TODO_INPUT);
    const $newTodoAddButton = screen.getByTestId(TEST_ID.NEW_TODO_ADD_BUTTON);
    await user.clear($newTodoInput);
    await user.type($newTodoInput, "테스트입니다.");
    await user.click($newTodoAddButton);

    const $todoItem = screen.getByRole("listitem");
    expect($todoItem).toBeInTheDocument();

    // todo 수정 버튼 클릭
    const $modifyButton = screen.getByTestId(TEST_ID.MODIFY_BUTTON);
    await user.click($modifyButton);

    // 수정
    const $modifyInput = screen.getByTestId(TEST_ID.MODIFY_INPUT);
    await user.clear($modifyInput);
    await user.type($modifyInput, "테스트1입니다.");

    // 제출
    const $submitButton = screen.getByTestId(TEST_ID.SUBMIT_BUTTON);
    await user.click($submitButton);

    // 수정 확인
    await user.click($modifyButton);
    const $modifyInput1 = screen.getByTestId(TEST_ID.MODIFY_INPUT);
    expect($modifyInput1.value).toBe("테스트1입니다.");

    unmount();
  });

  test("todo 추가 후 수정 => 취소", async () => {
    const { unmount } = render(<Todo />);

    const user = userEvent.setup();

    // todo 추가
    const $newTodoInput = screen.getByTestId(TEST_ID.NEW_TODO_INPUT);
    const $newTodoAddButton = screen.getByTestId(TEST_ID.NEW_TODO_ADD_BUTTON);
    await user.clear($newTodoInput);
    await user.type($newTodoInput, "테스트입니다.");
    await user.click($newTodoAddButton);

    const $todoItem = screen.getByRole("listitem");
    expect($todoItem).toBeInTheDocument();

    // todo 수정 버튼 클릭
    const $modifyButton = screen.getByTestId(TEST_ID.MODIFY_BUTTON);
    await user.click($modifyButton);

    // 수정
    const $modifyInput = screen.getByTestId(TEST_ID.MODIFY_INPUT);
    await user.clear($modifyInput);
    await user.type($modifyInput, "테스트1입니다.");

    // 수정 취소
    const $cancelButton = screen.getByTestId(TEST_ID.CANCEL_BUTTON);
    await user.click($cancelButton);

    // 값이 미변경되었는지 확인
    await user.click($modifyButton);
    const $modifyInput1 = screen.getByTestId(TEST_ID.MODIFY_INPUT);
    expect($modifyInput1.value).toBe("테스트입니다.");

    unmount();
  });
});
