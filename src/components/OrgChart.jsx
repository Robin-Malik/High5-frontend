import React from 'react';
import Tree from 'react-d3-tree';

const data = {
  name: 'Parent',
  children: [
    {
      name: 'Employee 1',
    },
    {
      name: 'Employee 2',
    },
    {
      name: 'Employee 3',
    },
    {
      name: 'Employee 4',
    },
    {
      name: 'Employee 5',
    },
  ],
};

const renderCustomNodeElement = ({ nodeDatum }) => (
  <div>
    <img src={nodeDatum.image} alt={nodeDatum.name} width="80" height="80" style={{ borderRadius: '50%' }} />
    <p style={{ textAlign: 'center', margin: '10px 0' }}>{nodeDatum.name}</p>
  </div>
);

const renderCustomLinkElement = ({ source, target }) => {
  let curve = 'M';
  curve += `${source.y},${source.x}`;
  curve += ` C ${(source.y + target.y) / 2},${source.x}`;
  curve += ` ${(source.y + target.y) / 2},${target.x}`;
  curve += ` ${target.y},${target.x}`;

  return (
    <path
      d={curve}
      fill="none"
      stroke="gray"
      strokeWidth={1}
      markerEnd="url(#arrowhead)"
    />
  );
};

const TreeChart = () => {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <svg>
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="0"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="gray" />
          </marker>
        </defs>
      </svg>
      <Tree
        data={data}
        nodeSvgShape={{ shape: 'none' }}
        separation={{ siblings: 1.5, nonSiblings: 2.5 }}
        translate={{ x: 400, y: 300 }}
        nodeLabelComponent={{
          render: <renderCustomNodeElement />,
          foreignObjectWrapper: {
            y: -40,
          },
        }}
        pathFunc="custom"
        transitionDuration={0}
        collapsible={false}
        allowForeignObjects
        styles={{
          links: { stroke: 'gray' },
        }}
        linkComponent={{ renderLink: <renderCustomLinkElement /> }}
      />
    </div>
  );
};

export default TreeChart;
