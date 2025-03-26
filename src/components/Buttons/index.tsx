import { useState } from 'react';
import ButtonDemo from '../Buttons/ButtonDemo';
import Package from '../layout/Package';
import { Switch } from '@progress/kendo-react-inputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';

export default function Buttons() {
  const [buttonProps, setButtonProps] = useState<ButtonProps>({
    size: 'medium',
    rounded: 'medium',
    fillMode: 'solid'
  });

  return (
    <Package id="buttons">
      <div className="flex gap-2 text-sm">
        <div>
          <div>Disabled</div>
          <Switch
            value={buttonProps.disabled}
            onChange={({ value }) => setButtonProps({ ...buttonProps, disabled: value })}
          />
        </div>
        <div>
          Size
          <DropDownList
            data={['small', 'medium', 'large']}
            value={buttonProps.size}
            size={'small'}
            onChange={({ value }) => setButtonProps({ ...buttonProps, size: value })}
          />
        </div>
        <div>
          Fill Mode
          <DropDownList
            data={['solid', 'outline', 'flat', 'link', 'clear']}
            value={buttonProps.fillMode}
            size={'small'}
            onChange={({ value }) => setButtonProps({ ...buttonProps, fillMode: value })}
          />
        </div>
        <div>
          Border Radius
          <DropDownList
            data={['none', 'medium', 'large', 'full']}
            value={buttonProps.rounded}
            size={'small'}
            onChange={({ value }) => setButtonProps({ ...buttonProps, rounded: value })}
          />
        </div>
      </div>

      <ButtonDemo {...buttonProps} />
      {/* <Fieldset
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
      </Fieldset> */}
    </Package>
  );
}
