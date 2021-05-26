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
    <Container maxWidth="100%">
      <Header />
      <main>

        <Container maxWidth="90%">
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start">
                <MediaCard></MediaCard>
                <MediaCard></MediaCard>
          </Grid>

        </Container>
      </main>
      <StickyFooter />
    </Container>  
    </div >
  );
}

