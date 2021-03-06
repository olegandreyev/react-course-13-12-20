import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Container, Header, Image } from "semantic-ui-react";
import useData from "../hooks/useData";
import LoadingOverlay from "../../../cw2/life-cycle-example/components/LoadingOverlay";
import Glide from "../../../../home-works/hw2/Glide";

function Album() {
  const { userId, albumId } = useParams();
  const [album, , error] = useData(`/albums/${albumId}`, {});
  const [photos, isFetching] = useData(`/albums/${albumId}/photos`, []);

  if (error && error.status === 404) {
    console.log(error);
    return <Redirect to={`/users/${userId}`}/>
  }

  return (
    <Container>
      <LoadingOverlay active={isFetching} />
      <Header>{album.title}</Header>
      {photos.length > 0 &&
      <Glide>
        {photos.map(photo => <Image src={photo.url} rounded/>)}
      </Glide>
      }
    </Container>
  );
}

export default Album;
