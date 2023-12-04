import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#D8B5E4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 50,
      }}
    >
      <div className="icons" style={{ display: "flex", gap: 10 }}>
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <GitHubIcon style={{fontSize: "30"}}/>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <LinkedInIcon style={{fontSize: "30"}}/>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <InstagramIcon style={{fontSize: "30"}}/>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <FacebookIcon style={{fontSize: "30"}}/>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <TwitterIcon style={{fontSize: "30"}}/>
        </div>
      </div>
      <div style={{cursor: "pointer"}}>
        <p>𝒟𝑒𝓈𝒾𝑔𝓃𝑒𝒹 & ℬ𝓊𝒾𝓁𝓉 𝒷𝓎</p>
        <p>𝒜𝓎𝓉𝒶𝒸 𝒢𝒶𝒽𝓇𝒶𝓂𝒶𝓃𝑜𝓋𝒶</p>
      </div>
    </div>
  );
};

export default Footer;
