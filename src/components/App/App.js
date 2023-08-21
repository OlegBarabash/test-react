import { Lesson, Toggle } from "../Lesson-note/Lesson-note";

export const App = () => {
  return (
    <div>
      Hallo!
      <Toggle>
        <Lesson step={5} />
      </Toggle>
    </div>
  );
};
