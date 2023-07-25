import userEvent from "@testing-library/user-event";

import { render, screen } from "../../tests/custom";
import Todo from "./index";
import { TEST_ID } from "../../constants";

describe("todo 테스트", () => {
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
