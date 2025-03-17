import { Button, ButtonGroup } from '@progress/kendo-react-buttons';
import Package from '../layout/Package';
import Fieldset from '../layout/Fieldset';
import { starIcon } from '@progress/kendo-svg-icons';

export default function Buttons() {
  return (
    <Package id="buttons">
      <Fieldset label="Button">
        <div className="space-x-1">
          <Button>Default</Button>
          <Button themeColor={'primary'}>Primary</Button>
          <Button themeColor={'secondary'}>Secondary</Button>
          <Button fillMode={'flat'}>Flat</Button>
          <Button fillMode={'outline'}>Outline</Button>
          <Button fillMode={'link'}>Link</Button>
        </div>
        <a
          className="source-link"
          href="https://www.telerik.com/kendo-react-ui/components/buttons/button"
          referrerPolicy="no-referrer"
          target="_blank"
        >
          Open Docs
        </a>
      </Fieldset>

      <Fieldset label="Button Group">
        <ButtonGroup className="space-x-1">
          <Button togglable={true} themeColor={'primary'}>
            Primary Togglable
          </Button>
          <Button svgIcon={starIcon} themeColor={'warning'}>
            Warning w. icon
          </Button>
          <Button disabled themeColor={'error'}>
            Disabled Error
          </Button>
        </ButtonGroup>
        <a
          className="block source-link"
          href="https://www.telerik.com/kendo-react-ui/components/buttons/buttongroup"
          referrerPolicy="no-referrer"
          target="_blank"
        >
          Open Docs
        </a>
      </Fieldset>
    </Package>
  );
}
