import React, { useState } from "react";
import NoteFormContext from "./NoteFormContext";
import NoteForm from "./NoteForm";
import { Note } from "../../redux/slices/notes";
import { useAppDispatch } from "../../redux/hooks";
import { add, update } from "../../redux/slices/notes";

function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

const NoteFormProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [note, setNote] = useState<undefined | null | Note>();

  return (
    <>
      <NoteFormContext.Provider value={setNote}>
        {children}
      </NoteFormContext.Provider>
      {note !== undefined && (
        <>
          <button
            className="fixed inset-0 bg-black opacity-80"
            onClick={() => setNote(undefined)}
          />
          <NoteForm
            initialValues={{
              name: note?.name || "",
              content: note?.content || "",
              categoryIndex: note?.categoryIndex || 0,
            }}
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.target as HTMLFormElement);

              const noteUpdate = {
                id: crypto.randomUUID(),
                name: formData.get("name") as string,
                content: (formData.get("content") || "") as string,
                categoryIndex: parseInt(
                  (formData.get("categoryIndex") || "0") as string
                ),
              };

              if (note === null) {
                dispatch(
                  add({
                    ...noteUpdate,
                    createdDate: formatDate(new Date()),
                  })
                );
              } else {
                dispatch(
                  update({
                    noteId: note.id,
                    update: noteUpdate,
                  })
                );
              }

              setNote(undefined);
            }}
          />
        </>
      )}
    </>
  );
};

export default NoteFormProvider;
