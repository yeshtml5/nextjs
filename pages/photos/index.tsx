/**
 * @name Guide
 * @description 가이드페이지
 */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Seo } from "@components/layout";
import { debug } from "console";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  data: {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }[];
};
const API = "https://jsonplaceholder.typicode.com/photos";

export default function Guide({ data }: Props) {
  const router = useRouter();
  const onClick = (item: any) => {
    router.push(
      {
        pathname: `/photos/${item?.id}`,
        query: item,
      },
      `/photos/${item?.id}`
    );
  };
  //*--------------------------------------------------*
  useEffect(() => {}, []);
  return (
    <Content>
      <Seo title="Guide" />
      <h1>PHOTO / all</h1>
      <div className="wrapper">
        {/* {JSON.stringify(data)} */}
        {data?.map((item, index) => {
          const { id, title, albumId, url, thumbnailUrl } = item;
          return (
            <div className="item" key={`${id}_${index}`}>
              <div onClick={() => onClick(item)}>
                <img src={thumbnailUrl} width={40} height={40} alt="" />
              </div>
              <Link href={`/photos/${id}`}>
                <a>
                  <span>[{albumId}]</span>
                  <span>{title}</span>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </Content>
  );
}
// getServerSideProps
export async function getServerSideProps() {
  const res = await (await fetch(`${API}`)).json();
  return {
    props: {
      data: res.splice(0, 10),
    },
  };
}
//*--------------------------------------------------*
const Content = styled.div`
  padding: 0 20px;
  /* wrapper */
  .wrapper {
  }
  .item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #111;
    img {
      margin-right: 10px;
    }
  }
`;
