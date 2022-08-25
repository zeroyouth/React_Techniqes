import React from 'react';

import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DemoOutput 실행중');
  return <MyParagraph>{props.show ? '새로운 거' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput);