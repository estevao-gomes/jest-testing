import  renderer, { ReactTestRendererJSON } from "react-test-renderer";
import Link from "@/components/Link"

it('changes the class when hovered', () => {
    const component = renderer.create(<Link page="www.facebook.com">Facebook</Link>)

    let tree = component.toJSON() as ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();

    renderer.act(()=>{
        tree.props.onMouseEnter()
    })

    tree = component.toJSON() as ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();

    renderer.act(()=>{
        tree.props.onMouseLeave()
    })

    tree = component.toJSON() as ReactTestRendererJSON;
    expect(tree).toMatchSnapshot()
})
