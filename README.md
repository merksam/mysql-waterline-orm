# Waterline based CRUID server
<h2>First steps</h2>
<ol>
  <li>
    In project root run <br/>
    <code>npm install</code> <br/>
  </li>
  <li>
    You should configure mysql database name, user and passowrd in: <br/>
    <code>./src/server/config/database.js</code>
  </li>
</ol>  
<h2>Project structure</h2>
<ul>
  <li><b>node_modules</b></li>
  <li><b>src</b>
    <ul>
      <li><b>server</b>
        <ul>
          <li><b>config</b>
            <ul>
              <li>database.js</li>
            </ul>
          </li>
          <li><b>models</b>
            <ul>
              <li>__Entities.js</li>
              <li>UserEntity.js</li>
            </ul>
          </li>
          <li><b>routes</b>
            <ul>
              <li>__Routes.js</li>
              <li>DefaultRoute.js</li>
              <li>UsersRoute.js</li>
            </ul>
          </li>
          <li>index.js</li>
        </ul>
      </li>
    </ul>  
  </li>
  <li>README.md</li>
  <li>.gitignore</li>
  <li>package.json</li>
</ul>
<code>./src/server</code> - root folder of server application <br/>
<code>./src/server/config</code> - ORM configs <br/>
<code>./src/server/entities</code> - ORM entites <br/>
<code>./src/server/routes</code> - server routes <br/>
<code>./src/server/index.js</code> - main server script, that starts server <br/>
<h2>What do you need to know</h2>
<p>
  <code>.src/server/index.js</code> is start point of server. That has included: <br/>
    <code>./src/server/config/database.js</code>, <br/>
    <code>./src/server/entites/__Entities.js</code> <br/>
    <code>./src/server/routes/__Routes.js</code> <br/>
  In <code>__Entites.js</code> and <code>__Routes.js</code> you have all user defined entites and routes accordingly.<br/>
</p>
<h2>Example</h2>
// TODO
