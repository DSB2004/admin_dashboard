import { WidgetMap } from '../../../utils/handleWidgetMap';
import { useWidget } from '../../../context/useWidget';
export default function Graphs() {
    const { widget } = useWidget();
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2  place-items-center gap-4 my-4 mb-8">
            {widget.map(ele => WidgetMap(ele.element, ele.title, ele.key))}
        </div>
    )
}
