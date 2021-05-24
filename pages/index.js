import {
  Button,
  Container,
  Grid,
  Box
} from "@material-ui/core";
import Link from 'next/link';
import Header from '../components/Header';
import StickyFooter from '../components/Footer';
import Filter from '../components/Filter';
import CenteredGrid from '../components/Filter';
import MediaCard from '../components/Cards'
export default function Home() {
  return (
    <div className="App">

      <Header />
      <main>

        <Container maxWidth="sm">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            container spacing={2}
          >
            <Grid item xs>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                container spacing={2}
              >
                <Grid item xs>
                  <MediaCard />
                </Grid>
                <Grid item xs>
                  <MediaCard />
                </Grid>
                <Grid item xs>
                  <MediaCard />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs >
              <CenteredGrid />
            </Grid>
          </Grid>
        </Container>
      </main>
      <StickyFooter />
    </div >
  );
}

