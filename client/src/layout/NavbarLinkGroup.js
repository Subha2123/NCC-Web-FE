import { useState } from 'react'
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  createStyles,
  Anchor,
} from '@mantine/core'

import { get } from 'lodash'
import { Link,Router } from 'react-router-dom'
import { Icon123 } from '@tabler/icons-react'
// import { link } from 'fs'

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,
    
    height:80,
    

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
    '&:selected': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
  // link: {
  //   fontWeight: 500,
  //   display: 'block',
  //   textDecoration: 'none',
  //   padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
  //   paddingLeft: 31,
  //   marginLeft: 30,
  //   fontSize: theme.fontSizes.sm,
  //   color:
  //     theme.colorScheme === 'dark'
  //       ? theme.colors.dark[0]
  //       : theme.colors.gray[7],
  //   borderLeft: `1px solid ${
  //     theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
  //   }`,

  //   '&:hover': {
  //     backgroundColor:
  //       theme.colorScheme === 'dark'
  //         ? theme.colors.dark[7]
  //         : theme.colors.gray[0],
  //     color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  //   },
  // },

  label: {
    transition: 'transform 200ms ease',
    color: "rgb(152,0,0)",
    
    '&:hover': {
      fontWeight:'bold',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[7]
              : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
  },
}))



export function NavbarLinkGroup({
  icon,
  label,
  initiallyOpened,
  links,
  parentLink,
}) {
  const { classes, theme, cx } = useStyles()
 
  const [opened, setOpened] = useState(initiallyOpened || false)
  
 
 

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened(true)}
        className={classes.control}
       
      >
        
        <Link
          to={parentLink || '#'}
          style={{ textDecoration: 'none',fontSize:20 }}
        >
          <Group position="apart" spacing={0}>
            {' '}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              
              <Box ml="md" className={classes.label}>{icon}&nbsp;&nbsp;{label}</Box>
            </Box>
            
          </Group>
        </Link>
      </UnstyledButton>
     
    </>
  )
}
