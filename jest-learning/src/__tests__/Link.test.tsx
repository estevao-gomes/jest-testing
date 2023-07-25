import  renderer from "react-test-renderer";
import Link from "@/components/Link"

it('changes the class when hovered', () => {
    const component = renderer.create(<Link page="www.facebook.com">Facebook</Link>)

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    renderer.act(()=>{
        tree.
    })
})
