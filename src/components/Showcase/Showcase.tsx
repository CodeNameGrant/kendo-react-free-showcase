import { useShowcaseContext } from '../../context/ShowcaseContext';
import Section from '../layout/Section';
import Buttons from './Buttons';

export default function Showcase() {
  const { componentMap } = useShowcaseContext();

  return (
    <div className="space-y-1">
      <Section>
        <p>TODO - Colors</p>
      </Section>
      <Section>{componentMap.get('buttons') && <Buttons />}</Section>
    </div>
  );
}
