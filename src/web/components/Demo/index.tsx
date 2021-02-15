import React from 'react';
import { VFC } from 'react';
import { useParams } from 'react-router-dom';

type DemoRouterProps = { id: string };

const Demo: VFC = () => {
  const { id } = useParams<DemoRouterProps>();
  return <h1>接受参数🚗{id}🚗</h1>;
};
export default Demo;
