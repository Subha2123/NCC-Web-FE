import { Navbar, ScrollArea, createStyles } from '@mantine/core'
import { NavbarLinkGroup } from './NavbarLinkGroup'

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
    zIndex: 0,
  },
  main: {
    flex:1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },
  header: {
    padding: theme.spacing.md,
    marginLeft: -theme.spacing.sm,
    marginRight: -theme.spacing.sm,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingBottom: theme.spacing.xl,
  },
  mainLinkActive: {
    width: '80%',
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },

    linkActive: {
      '&, &:hover': {
        borderLeftColor: theme.fn.variant({
          variant: 'filled',
          color: theme.primaryColor,
        }).background,
        backgroundColor: theme.fn.variant({
          variant: 'filled',
          color: theme.primaryColor,
        }).background,
        color: theme.white,
      },
    },
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}))


export function NavbarCustom({ options }) {
  const { classes } = useStyles()

  const links = options.map((item) => <NavbarLinkGroup {...item} key={item.label} />)

  return (
    <Navbar.Section grow className={classes.links}>
      
    </Navbar.Section>
  )
}