import { Outlet } from "react-router-dom";
import Header from "./Header";
import Siderbar from "./Siderbar";
import styled from "styled-components";
import ProtectedRoute from "./ProtectedRoute";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-gray-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <ProtectedRoute>
      <StyledAppLayout>
        <Header />
        <Siderbar />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyledAppLayout>
    </ProtectedRoute>
  );
}

export default AppLayout;
