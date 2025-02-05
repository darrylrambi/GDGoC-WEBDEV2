let notes = [
  {
    id: 1,
    heading: "Mempelajari Javascript",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non expedita similique tempora tempore exercitationem. Accusamus sint porro iste quos velit aperiam voluptas placeat error nulla maxime id, deserunt eum.",
    created_by: "John Doe",
    created_at: 1738146027613 // bisa menggunakan Date.now()
  }
]

const createNote = (id, heading, description, created_by) => {
  // kode kalian
  const created_at = Date.now();

  notes.push({
    id,
    heading,
    description,
    created_at,
    created_by
  })

  console.log("Berhasil menambahkan notes baru")
}

const readNote = () => {
  // kode kalian
  notes.forEach(note => {
    console.log(`ID: ${note.id}, Title: ${note.heading}, Author: ${note.created_by}`);
  });
}

const updateNote = (id, heading, description) => {
  // kode kalian
  const note = notes.find(note => note.id === id);

  if(!note) {
    console.log("Note tidak ditemukan")
  }

  note.heading = heading
  note.description = description
}

const deleteNote = () => {
  // kode kalian
}

// mengetes kode (diharapkan untuk tidak diganti): 
createNote("Belajar React", "Mempelajari dasar-dasar React dan cara membuat komponen.", "Jane Doe")
readNote();
console.log("=================================================================================================================")
updateNote(1, "Mempelajari JavaScript Lanjutan", "Mempelajari konsep lanjutan dalam JavaScript.");
readNote();
console.log("=================================================================================================================")
deleteNote(1)
readNote()
