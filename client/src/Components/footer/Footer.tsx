import { Container, Grid } from "@mui/material";
import "./footer.scss";

function Footer() {
    const group1: string[] = ['Contact Us', 'Join Our Community', 'Privacy Policy', 'Terms and Condiions'];

    const group2: string[] = ['Film', 'Series', 'Anime', 'Drama Korea']


  return (
    <footer className="footer">
      <Container >
        <Grid container spacing={4} columns={12}>
          <Grid item sm={6} xs={12}>
            <div className="caption basis-10">
              <h1 className="logo-footer">Baring</h1>
              <p className="flex">
              Baring is a streaming platform committed to bringing quality entertainment to your screen. With a diverse collection of movies and TV shows, we're here to meet your entertainment needs.
              </p>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className="list flex mt-7">
              <div className="list-group-1 flex-1">
                <ul>
                    {group1.map((item1)=>(
                        <li className="text-white mb-5">{item1}</li>
                    ))}
                </ul>
              </div>
              <div className="list-group-2 flex-1">
                <ul>
                    {group2.map((item2) => (
                        <li className="text-white mb-5">{item2}</li>
                    ))}
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="copy-right flex justify-center mt-12">
            <p className="text-center">Copyright © 2023 By Risqi Khasani. All Rights Reserved </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
