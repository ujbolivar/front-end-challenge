import { Text } from '$/components/Text';

import { Container, SearchInput } from './styles';

function HomeView(): JSX.Element {

  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput placeholder="Search by title, genre..." />
      <h2>Song Data</h2>
    </Container>
  );
}

export default HomeView;
