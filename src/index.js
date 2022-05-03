import React from 'react';
import { createRoot } from 'react-dom/client';
import { Table } from "./lib";
import data from './mocks'
import './lib/styles.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <div style={{ margin: "15px auto" }}>
    <h1>table-rc-oc-2022</h1>
    <Table data={data.employees} labels={data.labels} numberOfItemsByPage={10} />
  </div>
);