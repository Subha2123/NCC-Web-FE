import { Grid, Image, Group, Text, createStyles } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export function GridComponent({ text }) {
  const gridAlign = useMediaQuery("(min-width:600px");

  const useStyles = createStyles({
    image: {
      width: "90%",
      height: "100%",
    },
  });
  const classes = useStyles();
  

  return (
    <Group>
      <marquee>
        <Text fw={700} variant="text" size={20} fs="oblique" autoCorrect={true}>
          {text}
        </Text>
      </marquee>
    
      <Grid
       style={{ justifyContent:'center' ,width:"70%",marginLeft:'auto',marginRight:'auto'}}>

        <Grid.Col  span={gridAlign ? 4 : "content"}>
          <Image radius={20} width={"100%"} 
            src="https://res.cloudinary.com/delnwukcs/image/upload/v1670394103/rn8ypcty9z5z2hvvjptb.jpg"></Image>
        </Grid.Col>
        <Grid.Col span={gridAlign ? 4 : "content"}>
          <Image radius={20} width={"100%"}   src="https://res.cloudinary.com/delnwukcs/image/upload/v1670394103/rn8ypcty9z5z2hvvjptb.jpg"></Image>
        </Grid.Col>
        <Grid.Col span={gridAlign ? 4 : "content"}>
          <Image radius={20} width={"100%"}  src="https://res.cloudinary.com/delnwukcs/image/upload/v1670394103/rn8ypcty9z5z2hvvjptb.jpg"></Image>
        </Grid.Col>
        <Grid.Col  span={gridAlign ? 4 : "content"}>
          <Image radius={20} width={"100%"}  src="https://res.cloudinary.com/delnwukcs/image/upload/v1672214198/rvilk3aluakvosswigcy.jpg"></Image>
        </Grid.Col>
        <Grid.Col span={gridAlign ? 4 : "content"}>
          <Image  radius={20} width={"100%"}   src="https://res.cloudinary.com/delnwukcs/image/upload/v1670394103/rn8ypcty9z5z2hvvjptb.jpg"></Image>
        </Grid.Col>
        <Grid.Col span={gridAlign ? 4 : "content"}>
          <Image radius={20} width={"100%"}  src="https://res.cloudinary.com/delnwukcs/image/upload/v1663496503/nijgiho0otdtw0i4cvw5.jpg"></Image>
        </Grid.Col>
      </Grid>
    </Group>
  );
}
