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
    const response = await axios.get("https://back-end-terbaru.vercel.app/lumajang");
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
        "https://www.wartapos.id/wp-content/uploads/2023/10/IMG-20231005-WA0130.jpg",
    },
    {
      title: "Pendopo Aryawiraraja",
      description:
        "Pendopo Aryawiraraja Kabupaten Lumajang sebagai rumah dinas Bupati dan Wakil Bupati Lumajang. Pendopo Aryawiraraja juga akan dijadikan sebagai tempat belajar Sejarah Lumajang.",
      image:
        "https://www.petrogas.co.id/wp-content/uploads/2021/12/semeru-10.jpg",
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20986.946124534028!2d113.18067694893975!3d-8.144474359151298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd667c815555555%3A0x5aec0923509a05f3!2sAlun-Alun%20Lumajang!5e0!3m2!1sen!2sid!4v1720073583303!5m2!1sen!2sid"
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
