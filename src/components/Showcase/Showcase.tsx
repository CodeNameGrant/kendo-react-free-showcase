import { useShowcaseContext } from '../../context/ShowcaseContext';
import Section from '../layout/Section';
import Buttons from '../Buttons';

export default function Showcase() {
  const { componentMap } = useShowcaseContext();

  return (
    <div className="space-y-1">
      <section>
        <p>TODO - Colors</p>
      </section>

      <section>{componentMap.get('buttons') && <Buttons />}</section>
    </div>
  );
}
