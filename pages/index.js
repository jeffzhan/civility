import Head from "next/head";
import Image from "next/image";
import Results from "./Results.js";
import styles from "../styles/Home.module.css";
import {
  TextField,
  Typography,
  Box,
  Button,
  Stack,
  Link,
  Modal,
} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const ColoredBorderTextField = styled(TextField)`
  &:hover {
    color: ##585379;
  }
  & label.Mui-focused {
    color: #585379;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #585379;
    }
  }
`;

export default function Home() {
  const API_URL = "http://localhost:3001";

  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("nice");
    handleModalOpen();
    setData(null);
    fetch(`${API_URL}/api?prompt=${prompt}`)
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log(data);
  };

  return (
    <div
      className={styles.container}
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Head>
        <title>civility</title>
        <meta name="description" content="Powered by j.a.h." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box>
          <Results data={data} />
        </Box>
      </Modal>

      <Stack
        sx={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          width: "70%",
          height: "100vh",
          marginTop: 10,
        }}
      >
        <Typography variant="h4" fontFamily="Lato" color="#585379">
          civility
          <div className={styles.logo}>
            <a
              href="https://hackthenorth2022.devpost.com/?ref_feature=challenge&ref_medium=your-open-hackathons&ref_content=Submissions+open"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/civility_logo.svg"
                alt="Vercel Logo"
                width={70}
                height={60}
              />
            </a>
          </div>
        </Typography>

        <Typography variant="h2" className={styles.title} sx={{ marginTop: 3 }}>
          An online text analyzer
        </Typography>
        <Typography variant="h5" className={styles.subTitle}>
          simply enter your text below, and we'll let you know if you will be
          cancelled :)
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <ColoredBorderTextField
            multiline
            variant="outlined"
            rows={9}
            placeholder="Type text here..."
            inputProps={{
              style: { fontSize: 20, color: "black", fontFamily: "Lato" },
            }}
            sx={{
              width: "100%",
              marginTop: 3,
              borderRadius: 20,
            }}
            value={prompt}
            onChange={handleChange}
          />

          <Stack direction="row" className="button" justifyContent="end">
            <Button
              variant="contained"
              type="submit"
              sx={{
                marginTop: 2,
                width: "20%",
                minWidth: "100%",
                textTransform: "none",
                borderRadius: "14px",
                padding: "1rem",
                backgroundColor: "#585379",
                fontSize: 18,
                color: "#FFF0D9",
                "&:hover": { backgroundColor: "#8c84bf" },
              }}
              hover="none"
            >
              Check your Civility Score
            </Button>
          </Stack>
        </Box>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Stack
            direction="row"
            position="fixed"
            bottom="0"
            sx={{ marginBottom: 2 }}
          >
            <Link
              href="https://github.com/jeffzhan/civility"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="#585379"
            >
              powered by j.a.h. 😍
            </Link>
          </Stack>
        </div>
      </Stack>
    </div>
  );
}
