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
    
    <Container maxWidth="100%">
      <Header />
      <main>
    <div class="App">
        <Container maxWidth="90%">
          <div class="conteiner">
          <div class="cardBlock">

          
          <div class="cardColumn">
                <MediaCard></MediaCard>
                <MediaCard></MediaCard>
                <MediaCard></MediaCard>
                <MediaCard></MediaCard>
                <MediaCard></MediaCard>
                <MediaCard></MediaCard>
          </div>
          
          
          </div>    
          <div class="marginFilter">
          <div class="filterBlock">
            
          <Filter></Filter>
          </div>
          </div>
          </div>
        </Container>
        </div >
      </main>
      <StickyFooter />
    </Container>  
    
  );
}

