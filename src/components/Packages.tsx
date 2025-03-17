import { Checkbox } from '@progress/kendo-react-inputs';
import { useShowcaseContext } from '../context/ShowcaseContext';
import startCase from 'lodash.startcase';

export default function ComponentList() {
  const { componentMap, toggleComponent } = useShowcaseContext();

  return (
    <div className="flex gap-2 py-2 px-1 items-center rounded bg-neutral-400">
      {Array.from(componentMap.keys())
        .filter((item) => !item.includes('.'))
        .map((key) => (
          <Checkbox
            label={startCase(key)}
            key={key}
            value={componentMap.get(key)}
            onChange={() => toggleComponent(key)}
          />
        ))}
    </div>
  );
}

/* 
  Buttons
    .Button
    .ButtonGroup
    .Chip
    .ChipList
    .FloatingActionButton
    .Toolbar

  Common Utils
    .Icon
    .SvgIcon
    .Typography

  Data Grid**
    .TBD

  Data Tools
    .Pager

  Date Inputs
    .Calendar
    .DateInput
    .DatePicker
    .DateTimePicker

  Dialogs
    .Dialog
    .Window

  Dropdowns
    .AutoComplete
    .DropDownList**
    .MultiSelect**

  Indicators
    .Badge
    .Loader
    .Skeleton

  Inputs
    .Checkbox
    .ColorPalette
    .Input
    .MaskedTextBox
    .NumericTextBox
    .RadioButton
    .RadioGroup
    .Rating
    .Slider
    .Switch
    .TextArea
    .TextBox

  Labels

  Layout
    .ActionSheet
    .AppBar
    .Avatar
    .BottomNavigation
    .Breadcrumb
    .Card
    .ContextMenu
    .Drawer
    .ExpansionPanel
    .GridLayout
    .Menu
    .PanelBar
    .StackLayout
    .Stepper
    .TabStrip
    .TileLayout

  ListBox

  Notification

  ProgressBars
    .ProgressBar

  Tooltips
    .Popover
    .Tootip

*/
