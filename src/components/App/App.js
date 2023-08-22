import { Counter, Toggle, LocaleTime } from "../Lesson-note/Lesson-noteM2";

export const App = () => {
  return (
    <div>
      Hallo!
      {/* Module 2 */}
      <Toggle>
        <Counter step={5} />
      </Toggle>
      <LocaleTime />
    </div>
  );
};
