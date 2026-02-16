import { Document, Page, Text, View, StyleSheet, Link, Image } from '@react-pdf/renderer'
import { cvData } from '@/lib/cvData'

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#18181b',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e4e7',
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerLeft: {
    flex: 1,
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    objectFit: 'cover',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    color: '#52525b',
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    fontSize: 9,
    color: '#71717a',
  },
  contactItem: {
    flexDirection: 'row',
  },
  summary: {
    marginBottom: 20,
    lineHeight: 1,
    color: '#3f3f46',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 8,
    color: '#18181b',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillCategory: {
    marginBottom: 6,
  },
  skillCategoryName: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    marginBottom: 2,
  },
  skillItems: {
    fontSize: 9,
    color: '#52525b',
  },
  projectItem: {
    marginBottom: 10,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  projectName: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 11,
  },
  projectRole: {
    fontSize: 9,
    color: '#71717a',
  },
  projectDescription: {
    fontSize: 9,
    color: '#52525b',
    marginBottom: 1,
    lineHeight: 1.4,
  },
  projectTech: {
    fontSize: 8,
    color: '#a1a1aa',
  },
  projectUrl: {
    fontSize: 8,
    color: '#0d9488',
    marginTop: 2,
  },
  featuresList: {
    marginTop: 1,
    marginBottom: 2,
    paddingLeft: 8,
  },
  featureItem: {
    fontSize: 8,
    color: '#52525b',
    marginBottom: 1,
  },
  link: {
    color: '#18181b',
    textDecoration: 'none',
  },
})

export function CVDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>{cvData.profile.name}</Text>
            <Text style={styles.title}>{cvData.profile.title} • {cvData.profile.location}</Text>
            <View style={styles.contactRow}>
              <Text>{cvData.contact.email}</Text>
              <Link style={styles.link} src={`https://${cvData.contact.github}`}>
                <Text>{cvData.contact.github}</Text>
              </Link>
              <Link style={styles.link} src={`https://${cvData.contact.linkedin}`}>
                <Text>LinkedIn</Text>
              </Link>
            </View>
          </View>
          <Image style={styles.photo} src="/avatar.png" />
        </View>

        <Text style={styles.summary}>{cvData.profile.summary}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {cvData.skills.map((skillGroup) => (
            <View key={skillGroup.category} style={styles.skillCategory}>
              <Text style={styles.skillCategoryName}>{skillGroup.category}</Text>
              <Text style={styles.skillItems}>{skillGroup.items.join(' • ')}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {cvData.projects.map((project) => (
            <View key={project.name} style={styles.projectItem}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectName}>{project.name}</Text>
                <Text style={styles.projectRole}>{project.role}</Text>
              </View>
              <Text style={styles.projectDescription}>{project.description}</Text>
              {project.features && (
                <View style={styles.featuresList}>
                  {project.features.map((feature) => (
                    <Text key={feature} style={styles.featureItem}>• {feature}</Text>
                  ))}
                </View>
              )}
              <Text style={styles.projectTech}>{project.tech.join(' • ')}</Text>
              {project.url && (
                <Link style={styles.projectUrl} src={`https://${project.url}`}>
                  <Text style={styles.projectUrl}>{project.url}</Text>
                </Link>
              )}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  )
}
