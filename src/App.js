import React from "react";

const App = () => {
	const name = "React1";
	// undefined = false 를 반환한다. 왜지?
	const nameBlank = undefined;
	return (
		<>
			{/* 자바스크립트의 표현식 입력 */}
			{/* 인라인 CSS 방식 */}
			<h1 style={{ backgroundColor: "black", color: "aqua", fontSize: "48px" }}>
				{name + 1} hi!!!
			</h1>
			{/* class 라고 쓰면 X (동일한 예약어가 있음 ex)rcc입력) */}
			<h2 className="react">잘 작동하니?</h2>
			{name === "React" ? "리액트" : "리액트 아닙니다."}
			<br />
			{name === "React" ? "리액트" : null}
			<br />
			{name === "React" && "리액트"}
			<br />
			{/* && = 앞이 False면 뒤에 볼 필요도 없고
      || = 앞이 true 면 뒤에 볼 필요 없다. */}

			{nameBlank || "defaultValue"}
		</>
	);
};

export default App;
