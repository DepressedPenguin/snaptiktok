import "./style.css";
import Questions from "./Questions";
import Update from "./Update";

export default function Instructions() {
  return (
    <>
      <section className="instructions">
        <Questions />
        <Update />
      </section>
    </>
  );
}
