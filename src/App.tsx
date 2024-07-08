import React, { useState, useEffect } from 'react';

import functionsWithCategories, {
  FunctionWithCategories,
  Category,
  SubRecordType,
} from './data';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';

import './style.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import { Dialog } from 'primereact/dialog';
import { TabPanel, TabView } from 'primereact/tabview';
import { FloatLabel } from 'primereact/floatlabel';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
interface IZCodeDialogProps {
  visible: boolean;
  onHide: () => void;
}

const App: React.FC<IZCodeDialogProps> = ({ visible, onHide }) => {

  const originalState = {
    level1Options: [
      { id: '1', name: 'Electronics' },
      { id: '2', name: 'Clothing' },
      { id: '3', name: 'Books' },
    ],
    level2Options: [
      { id: '101', name: 'Smartphones', categoryId: '1' },
      { id: '102', name: 'Laptops', categoryId: '1' },
      { id: '201', name: "Men's Clothing", categoryId: '2' },
      { id: '202', name: "Women's Clothing", categoryId: '2' },
      { id: '301', name: 'Fiction', categoryId: '3' },
      { id: '302', name: 'Non-Fiction', categoryId: '3' },
    ],
    level3Options: [
      { id: '1001', name: 'iPhone', subCategoryId: '101' },
      { id: '1002', name: 'Samsung Galaxy', subCategoryId: '101' },
      { id: '1003', name: 'MacBook Air', subCategoryId: '102' },
      { id: '1004', name: 'MacBook Pro', subCategoryId: '102' },
      { id: '2001', name: 'Shirts', subCategoryId: '201' },
      { id: '2002', name: 'Pants', subCategoryId: '201' },
      { id: '2003', name: 'Dresses', subCategoryId: '202' },
      { id: '2004', name: 'Skirts', subCategoryId: '202' },
      { id: '3001', name: 'Harry Potter', subCategoryId: '301' },
      { id: '3002', name: 'Lord of the Rings', subCategoryId: '301' },
      { id: '3003', name: 'Sapiens', subCategoryId: '302' },
      { id: '3004', name: 'Thinking, Fast and Slow', subCategoryId: '302' },
    ],
  };
  const [level1Options, setLevel1Options] = useState(originalState.level1Options);
  const [level2Options, setLevel2Options] = useState(originalState.level2Options);
  const [level3Options, setLevel3Options] = useState(originalState.level3Options);
  const [selectedLevel1, setSelectedLevel1] = useState('');
  const [selectedLevel2, setSelectedLevel2] = useState('');
  const [selectedLevel3, setSelectedLevel3] = useState('');
  const handleLevel1Select = (value) => {
    setSelectedLevel1(value);
    setSelectedLevel2(null);
    setSelectedLevel3(null);

    const selectedLevel1Option = originalState.level1Options.find((option) => option.id === value?.id);

    if (selectedLevel1Option) {
      const filteredLevel2Options = originalState.level2Options.filter(
          (option) => option.categoryId === selectedLevel1Option.id
      );
      const filteredLevel3Options = originalState.level3Options.filter((option) =>
          filteredLevel2Options.some((level2) => level2.id === option.subCategoryId)
      );

      setLevel2Options(filteredLevel2Options);
      setLevel3Options(filteredLevel3Options);
    }
  };

  const handleLevel2Select = (value) => {
    setSelectedLevel2(value);
    setSelectedLevel3(null);

    const selectedLevel2Option = originalState.level2Options.find((option) => option.id === value?.id);

    if (selectedLevel2Option) {
      const filteredLevel3Options = originalState.level3Options.filter(
          (option) => option.subCategoryId === selectedLevel2Option.id
      );

      setLevel3Options(filteredLevel3Options);
      const selectedLevel1Option = originalState.level1Options.find(
          (option) => option.id === selectedLevel2Option.categoryId
      );
      setSelectedLevel1(selectedLevel1Option);
    }
  };

  const handleLevel3Select = (value) => {
    setSelectedLevel3(value);

    const selectedLevel3Option = originalState.level3Options.find((option) => option.id === value?.id);

    if (selectedLevel3Option) {
      const selectedLevel2Option = originalState.level2Options.find(
          (option) => option.id === selectedLevel3Option.subCategoryId
      );

      if (selectedLevel2Option) {
        setSelectedLevel2(selectedLevel2Option);
        const selectedLevel1Option = originalState.level1Options.find(
            (option) => option.id === selectedLevel2Option.categoryId
        );
        setSelectedLevel1(selectedLevel1Option);
      }
    }
  };

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const selectedLevelTemplate = (option, props) => {
    if (option) {
      return (
          <div className="dropdown-item-content">
            <span className="dropdown-item-code">{option.id} - </span>
            <span className="dropdown-item-name">{option.name}</span>
          </div>
      );
    }
    return <span>{props.placeholder}</span>;
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const levelTemplate = (option) => {
    return (
        <div className="dropdown-item-content">
          <span className="dropdown-item-code">{option.id}</span>
          <span className="dropdown-item-name">{option.name}</span>
        </div>
    );
  };




  return (
    <div className="flex justify-content-center">
      <h1>Hi</h1>
      <Dialog visible="true" onHide={onHide} style={{ width: '60vw' }}>
        <TabView>
          <TabPanel header="Assign a Z-Code">
            <div className="formgrid grid">
              <div className="field col-12 mt-2">
                <FloatLabel>
                  <Dropdown
                      id="level1"
                      value={selectedLevel1}
                      onChange={(e) => handleLevel1Select(e.value)}
                      optionLabel="name"
                      options={level1Options}
                      filter
                      valueTemplate={selectedLevelTemplate}
                      itemTemplate={levelTemplate}
                      className="w-full"
                      placeholder="Select Level 1"
                      showClear
                  />
                  <label htmlFor="function">Select a Function</label>
                </FloatLabel>
              </div>
              <div className="field col-12 mt-2">
                <FloatLabel>
                  <Dropdown
                      id="level2"
                      value={selectedLevel2}
                      onChange={(e) => handleLevel2Select(e.value)}
                      optionLabel="name"
                      options={level2Options}
                      filter
                      valueTemplate={selectedLevelTemplate}
                      itemTemplate={levelTemplate}
                      className="w-full"
                      placeholder="Select Level 2"
                      showClear
                  />
                  <label htmlFor="category">Select a Level2</label>
                </FloatLabel>
              </div>
              <div className="field col-12 mt-2">
                <FloatLabel>
                  <Dropdown
                      id="level3"
                      value={selectedLevel3}
                      onChange={(e) => handleLevel3Select(e.value)}
                      optionLabel="name"
                      options={level3Options}
                      filter
                      filterBy="id,name"
                      valueTemplate={selectedLevelTemplate}
                      itemTemplate={levelTemplate}
                      className="w-full"
                      placeholder="Select Level 3"
                      showClear
                  />
                  <label htmlFor="subRecordType">
                    Select a Sub Record Type
                  </label>
                </FloatLabel>
              </div>
            </div>
            <div className="flex justify-content-end flex-wrap mt-3">
              <Button label="Save" className="mr-2" />
              <Button label="Close" className="mr-2" onClick={onHide} />
            </div>
          </TabPanel>
        </TabView>
      </Dialog>
    </div>
  );
};

export default App;
