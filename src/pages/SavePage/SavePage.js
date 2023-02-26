import styled from "styled-components";
import Table from "../../components/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ParkContext } from "../../contexts/ParkContext";
import { useState, useMemo, useEffect } from "react";
import {
  writeSaveListLocalStorage,
  getSaveListLocalStorage,
} from "../../constants/utils";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Empty = styled.h2`
  margin: 66px 0;
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
  padding: 16px;
`;

const Header = styled.div``;

const Action = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 8px;
`;

const ActionWrapper = styled.div`
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.$color.background_hover};
  }
  :first-child {
    background: ${(props) =>
      props.$view === true ? props.$color.background_active : ""};
    color: ${(props) => (props.$view === true ? props.$color.font_active : "")};
  }
  :last-child {
    background: ${(props) =>
      props.$view === false ? props.$color.background_active : ""};
    color: ${(props) =>
      props.$view === false ? props.$color.font_active : ""};
  }
  & + & {
    margin-left: 6px;
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ActionItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.$color.font_main};
  width: 30px;
  height: 30px;
`;

const viewIconStyle = {
  width: "30px",
  height: "30px",
};

function TableAction({ item, handleDeleteList }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ActionItem
        to={`https://www.google.com/maps/dir/?api=1&destination=${item.lat},${item.lng}&travelmode=driving`}
        target="_blank"
        $color={theme}
      >
        <FontAwesomeIcon icon="fa-regular fa-compass" />
      </ActionItem>
      <ActionItem
        to="#"
        $color={theme}
        onClick={() => handleDeleteList(item.id)}
      >
        <FontAwesomeIcon icon="fa-solid fa-trash-can" />
      </ActionItem>
    </div>
  );
}

export default function SavePage() {
  const { theme } = useContext(ThemeContext);
  const { sortData } = useContext(ParkContext);
  const [listView, setListView] = useState(true);
  const [saveList, setSaveList] = useState(() => getSaveListLocalStorage() || []);

  useEffect(() => {
    writeSaveListLocalStorage(saveList);
  }, [saveList]);

  const handleViewChange = () => {
    setListView(!listView);
  };

  const data = useMemo(() => {
    const handleDeleteList = (id) => {
      setSaveList(saveList.filter((item) => item.id !== id));
    };
    const newData = saveList.map((item) => {
      const avlItem = sortData.find((avl) => avl.id === item.id);
      if (!avlItem) {
        return {
          ...item,
          availablecar: "無空位",
          action: (
            <TableAction item={item} handleDeleteList={handleDeleteList} />
          ),
        };
      } else {
        const { availablecar } = avlItem;
        return {
          ...item,
          availablecar,
          action: (
            <TableAction item={item} handleDeleteList={handleDeleteList} />
          ),
        };
      }
    });
    return newData;
  }, [sortData, saveList]);
  const columns = useMemo(
    () => [
      {
        Header: "名稱",
        accessor: "name",
      },
      {
        Header: "區域",
        accessor: "area",
        width: 80,
      },
      {
        Header: "地址",
        accessor: "address",
      },
      {
        Header: "營業時間",
        accessor: "opening",
        width: 80,
      },
      {
        Header: "費率",
        accessor: "payex",
        maxWidth: 250,
        width: 200,
      },
      {
        Header: "充電樁",
        accessor: "hasChargingStation",
        width: 80,
      },
      {
        Header: "即時空位",
        accessor: "availablecar",
        width: 80,
      },
      {
        Header: "總車位",
        accessor: "totalcar",
        width: 80,
      },
      {
        Header: "Action",
        accessor: "action",
        width: 100,
      },
    ],
    []
  );

  if (!data.length) return <Empty>目前沒有儲存資料</Empty>;
  return (
    <Container>
      <Header>
        <h1>我的儲存</h1>
        <Action>
          <ActionWrapper
            $color={theme}
            $view={listView}
            onClick={handleViewChange}
          >
            <FontAwesomeIcon icon="fa-solid fa-list" style={viewIconStyle} />
          </ActionWrapper>
          <ActionWrapper
            $color={theme}
            $view={listView}
            onClick={handleViewChange}
          >
            <FontAwesomeIcon icon="fa-solid fa-grip" style={viewIconStyle} />
          </ActionWrapper>
        </Action>
      </Header>
      <Body>
        <Table columns={columns} data={data} />
      </Body>
    </Container>
  );
}
TableAction.propTypes = {
  item: PropTypes.object,
  handleDeleteList: PropTypes.func,
};
