import { Button, ButtonProps } from '@progress/kendo-react-buttons';
import { userIcon } from '@progress/kendo-svg-icons';
import Fieldset from '../layout/Fieldset';

export default function ButtonDemo(props: ButtonProps) {
  return (
    <Fieldset
      label="Button"
      link="https://www.telerik.com/kendo-react-ui/components/buttons/button"
    >
      <div className="space-y-2">
        <div className="flex gap-2 items-baseline">
          <Button {...props}>Button</Button>
          <Button {...props} togglable>
            Toggle Button
          </Button>
          <Button {...props} svgIcon={userIcon} />
          <Button {...props} svgIcon={userIcon}>
            Icon and Text
          </Button>
        </div>
      </div>
    </Fieldset>
  );
}
