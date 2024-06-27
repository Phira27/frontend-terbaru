import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import axios from "axios";

function HistoryLumajang() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // function "fetchData"
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/lumajang");
    const data = response.data.data;

    setPosts(data);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id", options);
  };
  const events = [
    {
      title: "Festival Jaran Kencak",
      description:
        "Jaran Kencak Kesenian Asli Lumajang merupakan kesenian tarian kuda yang dapat menari ketika medengarkan alunan musik gamelan.",
      image:
        "https://scontent.fmlg11-1.fna.fbcdn.net/v/t1.6435-9/47390687_1958972350816455_6316704635264434176_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mxXbmsmZSMMQ7kNvgG45amY&_nc_ht=scontent.fmlg11-1.fna&oh=00_AYB5PwJISRLN_7pBkZQAb0VdZu2TkW72AduXpxfS40G-tA&oe=66A063F2",
    },
    {
      title: "Pendopo Aryawiraraja",
      description:
        "Pendopo Aryawiraraja Kabupaten Lumajang sebagai rumah dinas Bupati dan Wakil Bupati Lumajang. Pendopo Aryawiraraja juga akan dijadikan sebagai tempat belajar Sejarah Lumajang.",
      image:
        "https://portalberita.lumajangkab.go.id/files/berita/WhatsApp_Image_2021-11-15_at_13_00_57.jpeg",
    },
    {
      title: "Tari Topeng Kaliwungu",
      description:
        "Perayaan Hari Jadi Lumajang (Harjalu) Ke-767 dimeriahkan dengan menampikan budaya khas dari Lumajang yaitu Tari Topeng Kaliwungu.",
      image:
        "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/06/08/27edee6a-d6aa-45ca-b65b-ba8e6ab54efd-1345224140.jpeg",
    },
  ];

  const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

  return (
    <div className="row-span-11 p-4 overflow-y-auto mt-32">
      <Container>
        <Box
          sx={{
            bgcolor: "#2D1B6B",
            color: "white",
            p: 4,
            textAlign: "center",
            animation: `${fadeIn} 2s ease-in-out`,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h3" gutterBottom fontFamily="Poppins">
            History Lumajang
          </Typography>
          <Typography variant="body1" paragraph fontFamily="Poppins">
            Nama Lumajang berasal dari kata "LAMAJANG" yang diketahui dari hasil
            penelusuran sejarah, data prasasti, naskah-naskah kuno, bukti-bukti
            petilasan dan hasil kajian pada beberapa seminar.
          </Typography>
        </Box>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {events.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  animation: `${fadeIn} 1.5s ease-in-out ${index * 0.5}s`,
                  animationFillMode: "forwards",
                  opacity: 0,
                  borderRadius: 2,
                  boxShadow: 3,
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={event.image}
                  alt={event.title}
                />
                <CardContent sx={{ bgcolor: "#f5f5f5" }}>
                  <Typography variant="h6" component="div" fontFamily="Poppins">
                    {event.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontFamily="Poppins"
                  >
                    {event.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            fontFamily="Poppins"
            textAlign="center"
          >
            Kualitas Udara (30 Hari Terakhir)
          </Typography>
          <TableContainer
            component={Paper}
            sx={{ borderRadius: 2, boxShadow: 3 }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Tanggal</TableCell>
                  <TableCell align="justify">PM10</TableCell>
                  <TableCell align="justify">PM2.5</TableCell>
                  <TableCell align="justify">NO2</TableCell>
                  <TableCell align="justify">HUMIDITY</TableCell>
                  <TableCell align="justify">TEMP</TableCell>
                  <TableCell align="justify">KONDISI</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts.map((post) => (
                  <TableRow
                    key={post.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {formatDate(post.tanggal)}
                    </TableCell>
                    <TableCell align="justify">
                      {post.rata_PM10_concentration} µg/m3
                    </TableCell>
                    <TableCell align="justify">
                      {post.rata_PM25_concentration} µg/m3
                    </TableCell>
                    <TableCell align="justify">
                      {post.rata_NO2_concentration} µg/m3
                    </TableCell>
                    <TableCell align="justify">
                      {post.rata_humidity} %
                    </TableCell>
                    <TableCell align="justify">
                      {post.rata_temperature} °C
                    </TableCell>
                    <TableCell align="justify">{post.modus_average}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            fontFamily="Poppins"
            textAlign="center"
          >
            Lokasi Lumajang
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              borderRadius: 2,
              boxShadow: 3,
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=-8.11091,113.26795&z=15&output=embed"
              width="1200"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default HistoryLumajang;
