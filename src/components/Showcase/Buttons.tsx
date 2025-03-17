import { Button, ButtonGroup } from '@progress/kendo-react-buttons';
import Package from '../layout/Package';
import Fieldset from '../layout/Fieldset';
import { starIcon } from '@progress/kendo-svg-icons';

export default function Buttons() {
  return (
    <Package id="buttons">
      <Fieldset
        label="Button"
        link="https://www.telerik.com/kendo-react-ui/components/buttons/button"
      >
        <div className="space-x-1">
          <Button>Default</Button>
          <Button themeColor={'primary'}>Primary</Button>
          <Button themeColor={'secondary'}>Secondary</Button>
          <Button fillMode={'flat'}>Flat</Button>
          <Button fillMode={'outline'}>Outline</Button>
          <Button fillMode={'link'}>Link</Button>
        </div>
      </Fieldset>

      <Fieldset
        label="Button Group"
        link="https://www.telerik.com/kendo-react-ui/components/buttons/buttongroup"
      >
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
      </Fieldset>
    </Package>
  );
}
