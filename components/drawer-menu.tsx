import {  Drawer,  DrawerClose,  DrawerContent,  DrawerDescription,  DrawerFooter,  DrawerHeader,  DrawerTitle,  DrawerTrigger,} from "@/components/ui/drawer"
import { Button } from './ui/button'
import { Subtitle } from './texts'

export function DrawerMenu() {
return (<Drawer>  
	<DrawerTrigger className='md:hidden'>Menu</DrawerTrigger>
	<DrawerContent>
		<DrawerHeader>
			<DrawerTitle asChild>
				<Subtitle>Menu</Subtitle>
			</DrawerTitle>
			<DrawerDescription></DrawerDescription>
		</DrawerHeader>
		<div className='flex flex-col items-center pt-16 pb-48 px-24'>
			<p>Profile info</p>
			<p>Theme switcher</p>
		</div>
{/* 		<DrawerFooter>
			<Button>Submit</Button>
			<DrawerClose>
				<Button intent="secondary">Cancel</Button>
			</DrawerClose>
		</DrawerFooter> */}
	</DrawerContent>
</Drawer>)
}
