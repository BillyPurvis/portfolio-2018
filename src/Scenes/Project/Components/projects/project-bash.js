import React from 'react'
import ProjectGrid from '../project-grid'
import ProjectHeader from '../header'

const ProjectBash = () => (
    <div>
        <ProjectHeader title="Bash Scripting For GIT"/>
        <p>
        I really...really...really like writing Bash scripts. They're a huge part of my work for monitoring Laravel Queue Workers, Websocket servers or checking commits are written properly.       
        </p>
        <p>The snippet below was used as a Git Hook so we could be sure all commits were prefixed with a keyword so we knew what the commit was doing. Both pluaral and singular keywords were accepted. This meant
          we could use the commit history as our own changelog! 
        </p>
        <pre>
          <code>
            { `#!/bin/sh
  shopt -s nocasematch  # Case insensitive matching
  shopt -s extglob
  
  RED='\\033[0;31m'
  GREEN='\\033[0;32m'
  NC='\\033[0m'
  regex='^(fix(es)?|change(s)?|merge(s)?|update(s)?|add(s)?|remove(s)?)[[:space:]].+[a-zA-Z?!\${}()@].'
  
  # Get commit Message
  file=\`cat $1\`
  
  # Test commit message conforms to regex requirements.
  if ! [[ $file =~ $regex ]]; then
      echo "\${RED} Commit messages must be prefixed with singular or plural fix, change, merge, add. \n Example 'Adds new API connection input to dash'"
      exit 1;
      else
      echo "\${GREEN}Nice commit 👍 \${NC}"
  fi`}
          </code>
        </pre>
  
        <ProjectGrid />
    </div>
  )

  export default ProjectBash