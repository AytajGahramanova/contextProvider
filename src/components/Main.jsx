import { useContext, useState } from "react";
import { MainProvider } from "../context/contextProvider";
import SearchIcon from "@mui/icons-material/Search";
import "../components/Main.css";

const Main = () => {
  const [title, setTitle] = useState("");
  const [textarea, setTextArea] = useState("");
  const [search, setSearch] = useState("");
  const [color, setColor] = useState("");

  const { notes, setNotes } = useContext(MainProvider);

  const createCard = () => {
    const newCard = {
      title,
      textarea,
      color,
    };
    setNotes((prevCards) => [...prevCards, newCard]);

    setTitle("");
    setTextArea("");
  };

  const deleteCard = (index) => {
    const updatedCard = [...notes];
    updatedCard.splice(index, 1);
    setNotes(updatedCard);
  };

  const filteredCards = notes.filter((card) =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="main">
        <input
          type="text"
          placeholder="Node Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          id="textarea"
          rows="8"
          placeholder="Write note"
          onChange={(e) => setTextArea(e.target.value)}
        >
          {textarea}
        </textarea>
      </div>

      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        <div
          style={{
            background: "#f06292",
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid #e05b88",
          }}
          onClick={() => setColor("#f06292")}
        ></div>
        <div
          style={{
            background: "#ba68c8",
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid #a059ac",
          }}
          onClick={() => setColor("#ba68c8")}
        ></div>
        <div
          style={{
            background: "#4fc3f7",
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid #4bb9ea",
          }}
          onClick={() => setColor("#4fc3f7")}
        ></div>
        <div
          style={{
            background: "#ffd54f",
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid #e7c148",
          }}
          onClick={() => setColor("#ffd54f")}
        ></div>
        <div
          style={{
            background: "#aed581",
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid #69aed2",
          }}
          onClick={() => setColor("#aed581")}
        ></div>
        <button
          style={{
            background: "#8560c5",
            color: "#fff",
            border: "none",
            width: "70px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={createCard}
        >
          Save
        </button>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 50 }}
      >
        <input
          type="text"
          placeholder="Write to search..."
          style={{ position: "relative" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon style={{ position: "absolute", top: "52%", left: "63%" }} />
      </div>

      {filteredCards.map((card, index) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            key={index}
            className="card"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: `1px dashed ${card.color}`,
              marginBottom: "10px",
              width: "10rem",
              padding: 10,
              borderRadius: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="card-title">{card.title}</p>
              <p>{card.textarea}</p>
              <button
                style={{
                  background: "red",
                  border: "none",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "5px",
                }}
                onClick={deleteCard}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
