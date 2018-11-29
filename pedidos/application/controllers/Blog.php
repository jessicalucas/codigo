<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Blog extends CI_Controller {

    function __construct() 
    {
        
        parent::__construct();
        
        $this->load->model('BlogModel', 'blog', TRUE);
        $this->load->helper('url');
    }

    public function get_blog(){
        // executa a funcao get_restaurante no nosso model
        $posts = $this->blog->get_blog();
        // declara uma varialvel como array para retorno do json
        $response = array();
        // foreach para percorrer o array que foi retornado do banco de dados
        foreach($posts as $res){
            // declara um novo array para colocar restaurante por restaruante
            $post = array();
            $post["title"] = $res->title;
            $post["keywords"] = $res->keywords;
            $post["summary"] = $res->summary;
            $post["content"] = $res->content;
            $post["user_id"] = $res->user_id;
            $post["name"] = $res->name;
            $post["id"] = $res->id;
            array_push($response, $post);
        }
        // faz parce do array para json 
        // OBS: O formato do Json deve corresponder com objeto no seu aplicativo
        // por exemplo deve se conter um objeto Restaurante que contem as variaveis
        //    id,nome,telefone,imgurl
        echo json_encode($response);
    }

    public function cadastrar_blog($token){
        $msg = "";
        $request = array();
        $json = file_get_contents('php://input');
        $request = json_decode($json, true);
        $title = "";
        $keywords = "";
        $summary = "";
        $content = "";
        $user_id = $token;
        $flag_update = "";
        $name = "";
        $id = "";

        if(!empty($request))
        {
            foreach ($request as $key => $val) 
            {
                if($key == "id"){
                    $id = $val;
                }else if($key == "title"){
                    $title = $val;
                }else if($key == "keywords"){
                    $keywords = $val;
                }else if($key == "summary"){
                    $summary = $val;
                }else if($key == "content"){
                    $content = $val;
                }else if($key == "flag_update"){
                    $flag_update = $val;
                } else {
                    $msg = "valor enviado invalido";
                }
            }

            $dados = array(
                    'user_id' => $user_id,
                    'content' => $content,
                    'summary' => $summary,
                    'keywords' => $keywords,
                    'title' => $title,

            );

            if($flag_update) {
                $this->db->where('id', $id);
                $this->db->update('ls_post', $dados);
                $msg = $id."|sucesso";
            } else {
                if($this->db->insert('ls_post', $dados)){
                    $insert_id = $this->db->insert_id();
                    $msg = $insert_id."|sucesso";
                }else{
                    $msg = "Ocorreu algum erro";
                }
            }

        } else {
            $msg = "Erro ao enviar os dados !";
        }
        echo $msg;
    }

    public function delete($id) {

	    $this->db->where('id', $id);
	  	if($this->db->delete('ls_post')) {
	  		echo true;
	  	} else {
	  		echo false;
	  	}
	}

}
