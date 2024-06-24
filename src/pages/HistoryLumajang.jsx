import React from "react";
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

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HistoryLumajang = () => {
  const events = [
    {
      title: "Festival Jaran Kencak",
      description: "Jaran Kencak Kesenian Asli Lumajang merupakan kesenian tarian kuda yang dapat menari ketika medengarkan alunan musik gamelan.",
      image: "https://scontent.fmlg11-1.fna.fbcdn.net/v/t1.6435-9/47390687_1958972350816455_6316704635264434176_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mxXbmsmZSMMQ7kNvgG45amY&_nc_ht=scontent.fmlg11-1.fna&oh=00_AYB5PwJISRLN_7pBkZQAb0VdZu2TkW72AduXpxfS40G-tA&oe=66A063F2",
    },
    {
      title: "Pendopo Aryawiraraja",
      description: "Pendopo Aryawiraraja Kabupaten Lumajang sebagai rumah dinas Bupati dan Wakil Bupati Lumajang. Pendopo Aryawiraraja juga akan dijadikan sebagai tempat belajar Sejarah Lumajang.",
      image: "https://portalberita.lumajangkab.go.id/files/berita/WhatsApp_Image_2021-11-15_at_13_00_57.jpeg",
    },
    {
      title: "Tari Topeng Kaliwungu",
      description: "Perayaan Hari Jadi Lumajang (Harjalu) Ke-767 dimeriahkan dengan menampikan budaya khas dari Lumajang yaitu Tari Topeng Kaliwungu.",
      image: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/06/08/27edee6a-d6aa-45ca-b65b-ba8e6ab54efd-1345224140.jpeg",
    },
  ];

  const airQualityData = [
    { date: "2023-05-01", pm10: 20, pm2_5: 15, o3: 30, no2: 10, so2: 5, co: 0.5 },
    { date: "2023-05-02", pm10: 22, pm2_5: 16, o3: 32, no2: 11, so2: 5.5, co: 0.6 },
    // Tambahkan data hingga 30 hari
  ];

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
            Nama Lumajang berasal dari kata "LAMAJANG" yang diketahui dari hasil penelusuran sejarah, 
            data prasasti, naskah-naskah kuno, bukti-bukti petilasan dan hasil kajian pada beberapa seminar.
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
                  <Typography variant="body2" color="text.secondary" fontFamily="Poppins">
                    {event.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom fontFamily="Poppins" textAlign="center">
            Kualitas Udara (30 Hari Terakhir)
          </Typography>
          <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Tanggal</TableCell>
                  <TableCell align="right">PM10</TableCell>
                  <TableCell align="right">PM2.5</TableCell>
                  <TableCell align="right">O3</TableCell>
                  <TableCell align="right">NO2</TableCell>
                  <TableCell align="right">SO2</TableCell>
                  <TableCell align="right">CO</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {airQualityData.map((row) => (
                  <TableRow
                    key={row.date}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.date}
                    </TableCell>
                    <TableCell align="right">{row.pm10}</TableCell>
                    <TableCell align="right">{row.pm2_5}</TableCell>
                    <TableCell align="right">{row.o3}</TableCell>
                    <TableCell align="right">{row.no2}</TableCell>
                    <TableCell align="right">{row.so2}</TableCell>
                    <TableCell align="right">{row.co}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom fontFamily="Poppins" textAlign="center">
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
              title="Lumajang Map"
            ></iframe>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default HistoryLumajang;
