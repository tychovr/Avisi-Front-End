import "./SuperUserViewPost.css";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import RecommendIcon from "@mui/icons-material/Recommend";

export default function Home() {
  return (
    <div className="main-container">
      <div className="user-icon">
        <img
          src="https://www.citypng.com/public/uploads/small/11639594308azjskddoutgi296zaayuhyuspofhahhfa4ezuhne7vcflkjlnicxnewkf17enf0janiemum3o1eikv5x9r1s6wst2obumnv3rmxj.png"
          alt=""
        />
        <div className="post-container">
          <div className="text-box">
            <div>
              <textarea
                id="text_box"
                placeholder="Type here something..."
                name="text_box"
                rows={7}
                cols={42}
              ></textarea>
            </div>
          </div>
          <div className="btn-container">
            <button className="btn-change">Post</button>
          </div>
        </div>
      </div>
      <div className="post-container">
        <div className="user-container">
          <div className="user-data-container">
            <img
              src="https://www.citypng.com/public/uploads/small/11639594308azjskddoutgi296zaayuhyuspofhahhfa4ezuhne7vcflkjlnicxnewkf17enf0janiemum3o1eikv5x9r1s6wst2obumnv3rmxj.png"
              alt=""
            />
            <h3>Naam {"\n"}</h3>
          </div>
          <p>
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem
          </p>
        </div>
        <div className="post-changes">
          <div className="date">1/1/2022 16:00</div>
          <button className="btn-change">Wijzigen</button>
          <div className="icons-change">
            <EmailIcon />
            <MessageIcon />
            <RecommendIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
